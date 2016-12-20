import Http from './http';

class Base extends Http {
  all() {
    return this.get(`/Admin/${this.MODEL}`);
  }
  get(id) {
    return this.get(`/Admin/${this.MODEL}/${id}`);
  }
  create(model) {
    return this.post(`/Admin/${this.MODEL}`, {body: JSON.stringify(model)});
  }
  update(model) {
    return this.put(`/Admin/${this.MODEL}/${model.id}`, {body: JSON.stringify(model)});
  };
  destroy(model) {
    return this.delete(`/Admin/${this.MODEL}/${model.id}`);
  };
}

export default Base;
