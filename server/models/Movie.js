import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    genre: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
    },
    plotSummary: {
      type: String,
    },
    runtime: {
      type: Number,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model('Movie', MovieSchema);

export default Movie;
