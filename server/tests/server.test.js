const expect = require('expect');
const request = require('supertest'); //supertest converts our data into json and sends
const {ObjectID} = require('mongodb');
var {Todo} = require('../models/todo');
var {app} = require('../server');

const todos = [{
    _id:new ObjectID(),
    text: "First test todo"
   },
{
    _id : new ObjectID(),
    text:"Second test todo"
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos,(err,docs) => {
            if(err){
                return done(err);
            }
        });
        }).then(() => done());
});

describe('POST /todos', () => {
   

    it('should create a new todo', (done) => {
        var text = 'Test todo the text';
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err,res) => {
            if(err){
                return done(err);
            }

            Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
            }).catch((e) => done(e));
        });
    });
    it('Should not create todo with invalid body data',(done) => {
        
        var text = "test todo the text";

        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res) => {

            if(err){
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((e) => done(e));
        });
    });
});
describe('GET /todos' , () => {
    it('Should get all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});

describe('Get /todos/:id', () => {
    it('Should return to doc',(done) => {
        request(app)
        .get(`/todos/${todos[0]._id}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);
    });

    it('should return 404 if todo not found',(done) => {
        var id = new ObjectID();
        request(app)
        .get(`/todos/${id}`)
        .expect(404)
        .end(done)
    });

    it('should return 400 for non-object ids', (done) => {
        var id = 123;
        request(app)
        .get(`/todos/${id}`)
        .expect(400)
        .end(done)
        
    });
});



