import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // const category = new Category();
    // Object.assign(category, {
    //   name,
    //   description,
    //   created_at: new Date(),
    // });
    // this.categories.push(category);
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    // SELECT * FROM categories
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // SELECT * FROM categories WHERE name = "name"
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
