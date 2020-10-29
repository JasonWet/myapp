import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;
const say = (a: string, b: string): string => a + ' ' + b;

app.get('/', (req : Request, res : Response, next: NextFunction) => {
    console.log(add(3, 1))
    res.send('Hello There')
    // res.send(add(5, 10))
    // res.send(say('Jason', 'Dry'));
});

app.listen(8080, () => console.log('Server Running!'))
