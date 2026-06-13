CREATE TABLE IF NOT EXISTS product (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  description TEXT,
  price       DECIMAL(10,2) NOT NULL DEFAULT 0.00
);

INSERT INTO product (name, description, price) VALUES
  ('Laptop', 'Laptop de 15 pulgadas', 1200.00),
  ('Mouse', 'Mouse inalámbrico', 25.00),
  ('Teclado', 'Teclado mecánico', 85.00);