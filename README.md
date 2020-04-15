Crear una API con node.js, la cual permitira insertar y consultar url, con su respectivo nombre y descripcion
Mostrar su respectivo funcionamiento 

## informacion 
- nombre
- url
- descripcion


## SCRIPTS TABLA 

-- Table: public.informacion

-- DROP TABLE public.informacion;

CREATE TABLE public.informacion
(
    id bigint NOT NULL DEFAULT nextval('"Informacion_Id_seq"'::regclass),
    nombre text COLLATE pg_catalog."default",
    url text COLLATE pg_catalog."default",
    descripcion text COLLATE pg_catalog."default",
    CONSTRAINT "Informacion_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.informacion
    OWNER to postgres;