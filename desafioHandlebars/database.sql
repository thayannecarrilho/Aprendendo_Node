CREATE DATABASE orders;

USE orders;

INSERT INTO especificorder (number, name, celphone, size, flavor, caketop, dataWithdrawn, timedata)
VALUES 
(5200, "Angela Paes", 11987659876, "4kg", "Abacaxi", "Chocolate", "2024-03-20", "17:00:00"),
(5201, "Bruna Souza", 11976544567, "2kg",  "Coco", "Chocolate", "2024-03-20", "19:00:00"),
(5202, "André Lima", 11965430965,"5kg", "leite Ninho", "Morango", "2024-03-14", "20:00:00"),
(5203, "Isabele Silva", 11976543456, "2kg", "Doce de Leite", "Doce de Leite", "2024-04-10", "13:00:00"),
(5204, "Sabrina Costa", 11935649854, "4kg", "Floresta Negra", "Chocolate", "2024-03-20", "21:00:00"),
(5205, "Iara Souza", 11973458654, "2kg", "kitkat", "Chocolate", "2024-03-19", "18:00:00"),
(5206, "Mateus Duarte", 11975649765, "3kg", "Sonho de Valsa", "Morango", "2024-04-04", "19:00:00")
;

SELECT * FROM especificorder;