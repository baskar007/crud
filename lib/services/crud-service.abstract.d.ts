import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { DeepPartial } from 'typeorm';
import { CreateManyDto, CrudRequest, CrudRequestOptions, GetManyDefaultResponse, QueryOptions } from '../interfaces';
export declare abstract class CrudService<T> {
    abstract getMany(req: CrudRequest): Promise<GetManyDefaultResponse<T> | T[]>;
    abstract getOne(req: CrudRequest): Promise<T>;
    
    //abstract createOne(req: CrudRequest, dto: T): Promise<T>;
    abstract createOne(req: CrudRequest, dto: DeepPartial<T>): Promise<T>;
    abstract createMany(req: CrudRequest, dto: CreateManyDto): Promise<T[]>;
    
    //abstract updateOne(req: CrudRequest, dto: T): Promise<T>;
    abstract updateOne(req: CrudRequest, dto: DeepPartial<T>): Promise<T>;
    
    //abstract replaceOne(req: CrudRequest, dto: T): Promise<T>;    
    abstract replaceOne(req: CrudRequest, dto: DeepPartial<T>): Promise<T>;
    abstract deleteOne(req: CrudRequest): Promise<void | T>;
    throwBadRequestException(msg?: any): BadRequestException;
    throwNotFoundException(name: string): NotFoundException;
    createPageInfo(data: T[], total: number, limit: number, offset: number): GetManyDefaultResponse<T>;
    decidePagination(parsed: ParsedRequestParams, options: CrudRequestOptions): boolean;
    getTake(query: ParsedRequestParams, options: QueryOptions): number | null;
    getSkip(query: ParsedRequestParams, take: number): number | null;
    getPrimaryParam(options: CrudRequestOptions): string;
}
