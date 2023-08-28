import { describe, expect, it } from 'vitest';
import { loadAllItemsService, loadItemByIdService } from '../middlewares/services';

describe('loadAllItemsService', () => {
  it('Should be a function', (): void => {
    expect(typeof loadAllItemsService).toBe('function')
  });
});

describe('loadItemByIdService', () => {
  it('Should be a function', (): void => {
    expect(typeof loadItemByIdService).toBe('function')
  });

  it('Should return an error', (): void => {
    expect(loadItemByIdService('string')).toThrow(Error);
  });

  it('Should return an error', (): void => {
    expect(loadItemByIdService(101)).toThrow(Error);
  });
});