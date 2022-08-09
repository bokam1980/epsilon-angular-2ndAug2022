export interface IServiceContract<in TId, TModel> {
    get(id: TId): TModel | null;
    getAll(): TModel[];
    // insert(obj: TModel);
    // delete(id: TId);
    // update(obj: TModel, id: TId);
}