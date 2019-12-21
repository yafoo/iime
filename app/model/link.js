const {Model} = require('iijs');

class Link extends Model {
    async getList(condition, rows=10, order='id', sort='desc'){
        return await this.db.where(condition).order(order, sort).limit(rows).select();
    }

    async getOne(condition){
        return await this.db.where(condition).find();
    }

    async getOneByID(id){
        return await this.getOne({id});
    }

    async add(data){
        return await this.db.insert(data);
    }

    async update(data, condition){
        return await this.db.update(data, condition);
    }

    async delete(condition){
        return await this.db.delete(condition);
    }

    async getFriend(rows){
        return await this.db.where({pid: 1}).order('sort', 'asc').limit(rows).cache(600).select();
    }

    async getFooter(rows){
        return await this.db.where({pid: 2}).order('sort', 'asc').limit(rows).cache(600).select();
    }
}

module.exports = Link;