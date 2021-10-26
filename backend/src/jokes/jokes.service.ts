import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { Joke } from './entities/joke.entity';

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(Joke) private readonly repo: Repository<Joke>,
  ) {}

  create(createJokeDto: CreateJokeDto) {
    const joke = new Joke();
    joke.whoThere = createJokeDto.whoThere;
    joke.response = createJokeDto.response;

    return this.repo.save(joke);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    return (await this.repo.findByIds([id])).pop();
  }

  async findOneRandom() {
    const jokes = await this.findAll();
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    return joke;
  }

  async update(id: string, updateJokeDto: UpdateJokeDto) {
    const joke = await this.findOne(id);
    joke.whoThere = updateJokeDto.whoThere;
    joke.response = updateJokeDto.response;
    return this.repo.save(joke);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
