import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class CategoryModel {
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
        status: {
          type: String,
          enum: ['active', 'inactive'],
          default: 'active',
        },
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('categorys', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('categorys');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('categorys');
  }
}

export default CategoryModel;
