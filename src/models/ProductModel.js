import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class ProductModel {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        name: {
          type: String,
          required: [true, 'Please add a name'],
        },
        description: {
          type: String,
          required: [true, 'Please add a description'],
        },

        price: {
          type: Number,
          required: [true, 'Please add a price'],
        },
        brand: {
          type: String,
          required: [true, 'Please add a brand'],
        },
        color: {
          type: String,
          required: [true, 'Please add a color'],
        },
        size: {
          type: String,
          required: [true, 'Please add a size'],
        },
        quantity: {
          type: Number,
          required: [true, 'Please add a quantity'],
        },
        category_id: {
          type: Schema.Types.ObjectId,
          ref: 'categorys',
          required: true,
        },
        user_id: {
          type: Schema.Types.ObjectId,
          ref: 'users',
          required: true,
        },
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('products', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('products');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('products');
  }
}

export default ProductModel;
