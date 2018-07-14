class Repository{
    constructor(props){
        this._props = props;
        this.data = new Map();
        this._id = 0;
    }

    add(entity){
        let entityKeys = Object.keys(entity);
        let entityValues = Object.values(entity);
        let propsKeys = Object.keys(this._props);
        let propsValues = Object.values(this._props);

        // Validation
        for (let i = 0; i < entityValues.length; i++) {
            if(propsKeys[i] !== entityKeys[i]){
                throw new Error(`Property ${propsKeys[i]} is missing from the entity`);
            }
            if(typeof entityValues[i] !== propsValues[i]){
                throw new TypeError(`Property ${propsKeys[i]} is of incorrect type!`);
            }
        }
        this.data.set(this._id, entity);
        this._id++;
        return this._id - 1;
    }

    update(id, entity){
        if(this.data.get(id) === undefined){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        // Validation

        let entityKeys = Object.keys(entity);
        let entityValues = Object.values(entity);
        let propsKeys = Object.keys(this._props);
        let propsValues = Object.values(this._props);

        for (let i = 0; i < entityValues.length; i++) {
            if(propsKeys[i] !== entityKeys[i]){
                throw new Error(`Property ${propsKeys[i]} is missing from the entity`);
            }
            if(typeof entityValues[i] !== propsValues[i]){
                throw new TypeError(`Property ${propsKeys[i]} is of incorrect type!`);
            }
        }
        this.data.set(id, entity);
    }

    get(id){
        if(this.data.get(id) === undefined){
            throw new Error('Invalid id');
        }
        return this.data.get(id);
    }

    del(id){
        if(this.data.get(id) === undefined){
            throw new Error('Invalid id');
        }
        this.data.delete(id);
    }

    get count(){
        return Array.from(this.data.keys()).length;
    }

}

let properties = {
    name: "string",
    age: "number"
};

let repo = new Repository(properties);


let entity = {name:'Pesho', age:20};
repo.add(entity);
repo.add(entity);

let upEntity = {name:'Gosho', age: 19};
repo.update(0, upEntity);
console.log(repo.get(0))
console.log(repo.count);