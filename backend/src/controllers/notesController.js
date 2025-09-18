const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  const { title, description } = req.body;
  try {
    const note = await Note.create({ user: req.user.id, title, description });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ msg: 'Note not found' });
    if (note.user.toString() !== req.user.id) return res.status(403).json({ msg: 'Unauthorized' });

    note.title = title ?? note.title;
    note.description = description ?? note.description;
    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    // Check if ID is a valid ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ msg: 'Invalid note ID' });
    }

    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ msg: 'Note not found' });

    if (note.user.toString() !== req.user.id) {
      return res.status(403).json({ msg: 'Unauthorized' });
    }

    await note.deleteOne(); // ✅ safer than remove()
    res.json({ msg: 'Note deleted successfully' });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ msg: 'Server error while deleting note' });
  }
};
