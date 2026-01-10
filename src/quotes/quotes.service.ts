import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
    private http: any;
    private options: {};

    constructor() {
        this.http = require('https');
        this.options = {
            hostname: 'br.dolarapi.com',
        };
    }

    private async loadRequest(path: string): Promise<any> {
        this.options['path'] = path;

        return new Promise((resolve, reject) => {
            const req = this.http.request(this.options, (res: any) => {
                const chunks: Buffer[] = [];

                res.on('data', (chunk: Buffer) => {
                    chunks.push(chunk);
                });

                res.on('end', () => {
                    const body = Buffer.concat(chunks);
                    const result = JSON.parse(body.toString());
                    resolve(result);
                });
            });

            req.on('error', (error: Error) => {
                reject(error);
            });

            req.end();
        });
    }

    async list(): Promise<any> {
        return await this.loadRequest('/v1/cotacoes');
    }

    async getCurrency(currency: string) {
        return await this.loadRequest(`/v1/cotacoes/${currency.toLowerCase()}`);
    }

}
