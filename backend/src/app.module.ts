import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WalletModule } from './wallet/wallet.module';
import { LoanRequestsModule } from './loan-requests/loan-requests.module';
import { FundingModule } from './funding/funding.module';
import { RepaymentsModule } from './repayments/repayments.module';
import { InterestDistributionModule } from './interest-distribution/interest-distribution.module';
import { NpaManagementModule } from './npa-management/npa-management.module';
import { AuthModule } from './auth/auth.module'; // Include AuthModule

@Module({
  imports: [
    AuthModule, // Import AuthModule for authentication
    UsersModule,
    WalletModule,
    LoanRequestsModule,
    FundingModule,
    RepaymentsModule,
    InterestDistributionModule,
    NpaManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService], // Add PrismaService here
})
export class AppModule {}
