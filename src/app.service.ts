import { Injectable } from '@nestjs/common';
import { BigQueryService } from './big-query.service';

@Injectable()
export class AppService {
  constructor(private readonly bigQueryService: BigQueryService) {}

  getData() {
    const query =
      "SELECT * FROM 'youtube-player-238012.user_d1.user_t1' LIMIT 100";
    return this.bigQueryService.runQuery(query);
  }

  addData(name: string, age: number, email: string) {
    const query = `
    INSERT INTO \`youtube-player-238012.user_d1.user_t1\` (name, age, email)
    VALUES ('${name}', ${age}, '${email}')
  `;
    return this.bigQueryService.runQuery(query);
  }

  async createDataset(datasetId: string): Promise<void> {
    return this.bigQueryService.createDataset(datasetId);
  }
  async createTable(
    datasetId: string,
    tableId: string,
    schema: any[],
  ): Promise<void> {
    return this.bigQueryService.createTable(datasetId, tableId, schema);
  }
}
