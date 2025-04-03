import { rest } from "msw";

const API_BASE_URL = "https://fe-task-api.mainstack.io";

export const handlers = [
  // Mock transactions endpoint
  rest.get(`${API_BASE_URL}/transactions`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          amount: 500,
          metadata: {
            name: "John Doe",
            type: "digital_product",
            email: "johndoe@example.com",
            quantity: 1,
            country: "Nigeria",
            product_name: "Rich Dad Poor Dad",
          },
          payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
          status: "successful",
          type: "deposit",
          date: "2022-03-03",
        },
        {
          amount: 400,
          metadata: {
            name: "Fibi Brown",
            type: "coffee",
            email: "fibibrown@example.com",
            quantity: 8,
            country: "Ireland",
          },
          payment_reference: "d28db158-0fc0-40cd-826a-4243923444f7",
          status: "successful",
          type: "deposit",
          date: "2022-03-02",
        },
      ])
    );
  }),

  // Mock wallet endpoint
  rest.get(`${API_BASE_URL}/wallet`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        balance: 750.56,
        total_payout: 500,
        total_revenue: 1250.56,
        pending_payout: 0,
        ledger_balance: 500,
      })
    );
  }),

  // Mock user endpoint
  rest.get(`${API_BASE_URL}/user`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        first_name: "Olivier",
        last_name: "Jones",
        email: "olivierjones@gmail.com",
      })
    );
  }),
];
