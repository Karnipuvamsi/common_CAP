using { Northwind as northwind } from './external/Northwind';

service CatalogService @(path:'app/test') {
    @readonly 
   // @requires: 'authenticated-user'
    entity Products as projection on northwind.Products;
  entity Categories as projection on northwind.Categories;
}
