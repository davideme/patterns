import asyncio

async def gen(*nums):
    for n in nums:
        yield n

async def sq(in_gen):
    async for n in in_gen:
        yield n * n

async def main():
    async for n in sq(sq(gen(2, 3, 4))):
        print(n)

asyncio.run(main())
