import { googleApisService } from './goolgeApis.service';
import moment from 'moment';
import { ApiDocumentString, ApiDocumentInteger } from '../typings';

type TestType = {
    name: ApiDocumentString;
    value: ApiDocumentInteger;
};

describe('Google APIs Service integration tests', () => {
    const service = googleApisService;
    const basePath =
        'projects/resume-website-271820/databases/(default)/documents';

    it('should fetch single response', async () => {
        const result = await service.get<TestType>(`${basePath}/test/foo`);
        expect(result.name.stringValue).toEqual('foo');
    });

    it('should fetch single response with queries', async () => {
        const mask = 'mask.fieldPaths=value';
        const readTime = `readTime=${moment().format()}`;
        const result = await service.get<TestType>(
            `${basePath}/test/foo`,
            mask,
            readTime
        );
        expect(result.value.integerValue).toEqual('1');
    });

    it('should fetch multiple responses', async () => {
        const result = await service.get<Array<TestType>>(`${basePath}/test`);
        expect(result[0].name.stringValue).toEqual('bar');
        expect(result[1].name.stringValue).toEqual('foo');
    });

    it('should fetch multiple responses with queries', async () => {
        const mask = 'mask.fieldPaths=value';
        const readTime = `readTime=${moment().format()}`;
        const result = await service.get<TestType>(
            `${basePath}/test`,
            mask,
            readTime
        );
        expect(result[0].value.integerValue).toEqual('2');
        expect(result[1].value.integerValue).toEqual('1');
    });

    it('should throw error if fetch fails', async () => {
        await expect(service.get<TestType>(`garbagePath`)).rejects.toThrow();
    });
});
