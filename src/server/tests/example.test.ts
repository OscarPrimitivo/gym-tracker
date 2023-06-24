import { type inferProcedureInput } from '@trpc/server';
import { describe, expect, it } from 'vitest';
import { createInnerTRPCContext } from '../api/trpc';
import type { AppRouter } from '../api/root';
import { appRouter } from '../api/root';

describe('example Router', () => {
	describe('hello query', () => {
		it('given a string should return input with Hello prepended', async () => {
			const ctx = createInnerTRPCContext({ session: null });
			const caller = appRouter.createCaller(ctx);

			type Input = inferProcedureInput<AppRouter['example']['hello']>;
			const input: Input = {
				text: 'test',
			};

			const example = await caller.example.hello(input);

			expect(example).toMatchObject({ greeting: 'Hello test' });
		});
	});
});
