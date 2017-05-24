import { AngularmService, memoryDAO, entityType } from 'angularm';

export let describeDomain = (angularm: AngularmService) => {
  angularm.setupDomain(
    memoryDAO(
        entityType('student', 'students', {id: 'code'})
            .propertyType('code', 'number')
            .propertyType('name', 'string')
            .propertyType('age', 'number')
    ),
    memoryDAO(
      entityType('client', 'clients', {id: 'id'})
        .propertyType('id', 'number')
        .propertyType('name', 'string')
    ),
    memoryDAO(
      entityType('product', 'products', {id: 'id'})
        .propertyType('id', 'number')
        .propertyType('description', 'string')
    ),
    memoryDAO(
      entityType('book', 'books', {id: 'name'})
        .propertyType('name', 'string')
        .propertyType('author', 'string')
    )
  );
};


