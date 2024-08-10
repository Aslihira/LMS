import { Test, TestingModule } from '@nestjs/testing';
import { InterestDistributionService } from './interest-distribution.service';

describe('InterestDistributionService', () => {
  let service: InterestDistributionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterestDistributionService],
    }).compile();

    service = module.get<InterestDistributionService>(InterestDistributionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
