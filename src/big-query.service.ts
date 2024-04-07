import { Injectable } from '@nestjs/common';
import { BigQuery, BigQueryOptions } from '@google-cloud/bigquery'; 

@Injectable()
export class BigQueryService {
  private readonly bigQuery: BigQuery;
  private readonly bigQueryOptions: BigQueryOptions

  constructor() {
    this.bigQueryOptions = {
      projectId:"youtube-player-238012",
    keyFilename:'./src/config/service-config.json'
    };
    this.bigQuery = new BigQuery(this.bigQueryOptions);
  }

  async runQuery(query: string): Promise<any[]> {
    const options = {
      query,

    };

    const [rows] = await this.bigQuery.query(options);

    return rows;
  }


  async createDataset(datasetId: string): Promise<void> {
    await this.bigQuery.createDataset(datasetId);
  }

  async createTable(datasetId: string, tableId: string, schema: any[]): Promise<void> {
    const options = {
      schema: {
        fields: schema,
      },
    };

    await this.bigQuery.dataset(datasetId).createTable(tableId, options);
  }
}
