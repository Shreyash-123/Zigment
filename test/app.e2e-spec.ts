import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('App (e2e)', () => {
  let app;
  let server;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    server = app.getHttpServer();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/preferences (POST) should create a user preference', async () => {
    const response = await request(server)
      .post('/api/preferences')
      .send({
        userId: 'user123',
        email: 'user@example.com',
        preferences: {
          marketing: true,
          newsletter: false,
          updates: true,
          frequency: 'weekly',
          channels: {
            email: true,
            sms: false,
            push: true,
          },
        },
        timezone: 'America/New_York',
      })
      .expect(201);

    expect(response.body).toHaveProperty('userId', 'user123');
    expect(response.body).toHaveProperty('preferences');
  });

  it('/api/preferences/:userId (GET) should return user preferences', async () => {
    const response = await request(server).get('/api/preferences/user123').expect(200);

    expect(response.body).toHaveProperty('userId', 'user123');
  });

  it('/api/notifications/send (POST) should send a notification', async () => {
    const response = await request(server)
      .post('/api/notifications/send')
      .send({
        userId: 'user123',
        type: 'marketing',
        channel: 'email',
        subject: 'Special Offer',
        body: 'Check out our latest deals!',
      })
      .expect(201);

    expect(response.body).toHaveProperty('status', 'sent');
  });

  it('/api/notifications/:userId/logs (GET) should return notification logs', async () => {
    const response = await request(server).get('/api/notifications/user123/logs').expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it('/api/notifications/stats (GET) should return notification stats', async () => {
    const response = await request(server).get('/api/notifications/stats').expect(200);

    expect(response.body).toHaveProperty('total');
    expect(response.body).toHaveProperty('failed');
  });
});
