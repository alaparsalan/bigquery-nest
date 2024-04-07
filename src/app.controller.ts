import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('data')
  data() {
    return this.appService.getData();
  }

  @Get('addData')
  async addData(
    @Query('name') name: string,
    @Query('age') age: number,
    @Query('email') email: string,
  ) {
    if(name&&age&&email){
      console.log({name,email,age});

      return this.appService.addData(name,age,email)

    }
  }

  @Get('create-dataset-and-table')
  async createDatasetAndTable(): Promise<string> {
    const datasetId = 'user_d1';
    const tableId = 'user_t1';

    try {
      await this.appService.createDataset(datasetId);
      await this.appService.createTable(datasetId, tableId, [
        { name: 'name', type: 'STRING' },
        { name: 'age', type: 'INTEGER' },
        { name: 'email', type: 'STRING' },
      ]);
      return 'Dataset and Table created successfully.';
    } catch (error) {
      return `Error creating Dataset and Table: ${error.message}`;
    }
  }
}
