import { Test, TestingModule } from '@nestjs/testing';
import { NpaManagementService } from './npa-management.service';

describe('NpaManagementService', () => {
  let service: NpaManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NpaManagementService],
    }).compile();

    service = module.get<NpaManagementService>(NpaManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
