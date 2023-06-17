import Service from './Service';
import csv from 'csv-parser';
import fs from 'fs';

class CategoryService extends Service {
  constructor(model) {
    super(model);
  }

  async search(req) {
    try {
      const { name } = req.query;
      const data = await this.model.find({
        name: { $regex: name, $options: 'i' },
      });
      return {
        error: false,
        message: 'Successfully fetched data',
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async insertCsvData(req) {
    try {
      const results = await parseCsvData(req.file.path);
      console.log(results, 'results');

      let data;
      results.forEach(async (element) => {
        data = await this.model.create(element);
      });

      return {
        error: false,
        message: 'Successfully inserted data',
        statusCode: 201,
        data: data,
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }
}
function parseCsvData(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(
        csv({
          mapHeaders: ({ header, index }) => header.toLowerCase(),
        }),
      )
      .on('data', (data) => {
        console.log(data);
        results.push(data);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

export default CategoryService;
