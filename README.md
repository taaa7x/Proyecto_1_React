# 🚀 Mini Proyecto #2: Estructuras de Control, POO y Arquitectura Web Segura en PHP

[![PHP Version](https://img.shields.io/badge/PHP-8.1%20%7C%208.2-blue.svg)](https://www.php.net/)
[![Standards](https://img.shields.io/badge/Standards-PSR--1%20%7C%20PSR--4-orange.svg)](https://www.php-fig.org/)
[![Security](https://img.shields.io/badge/OWASP%20Top%2010-Compliant-green.svg)](https://owasp.org/)
[![Institution](https://img.shields.io/badge/UTP-FISC-purple.svg)](https://fisc.utp.ac.pa/)

## 🏛️ Información Institucional
* **Institución:** Universidad Tecnológica de Panamá (UTP)
* **Facultad:** Facultad de Ingeniería en Sistemas Computacionales (FISC)
* **Curso:** Desarrollo Web VII
* **Instructora:** Ing. Irina Fong
* **Periodo Académico:** Mayo de 2026

### 👥 Integrantes del Equipo
* **Estudiante #1** - *Cédula*
* **Estudiante #2** - *Cédula*
* **Estudiante #3** - *Cédula*

---

## 📌 Introducción
Este repositorio contiene la solución modular y robusta para el **Mini Proyecto #2** del curso. El objetivo principal de esta experiencia es resolver 9 problemas algorítmicos complejos utilizando las sentencias de control condicionales (`if`, `else`, `switch`, operador ternario) y repetitivas (`while`, `for`, `foreach`) provistas por PHP. 

El proyecto adopta el patrón arquitectónico **Modelo-Vista-Controlador (MVC)** para separar estrictamente la lógica de presentación de la lógica del negocio, aplicando buenas prácticas de programación bajo los estándares internacionales **PSR-1** y **PSR-4**, optimizando código mediante el principio **DRY (Don't Repeat Yourself)** y blindando el sistema bajo las recomendaciones globales del **OWASP Top 10**.

---

## 🛠️ Tecnologías y Herramientas Utilizadas
* **Backend:** PHP 8.x (Programación Orientada a Objetos, Métodos Estáticos).
* **Frontend:** HTML5, CSS3, Bootstrap 5 (Diseño Responsivo adaptativo).
* **Componentes Dinámicos:** SweetAlert2 (Gestión profesional de alertas UX/UI).
* **Estándares:** PSR-1 (Basic Coding Standard), PSR-4 (Autoloading Standards).

---

## 📂 Estructura Arquitectónica del Proyecto (MVC)
Cumpliendo con los requerimientos, el software se divide por capas limpias para asegurar que ninguna lógica de negocio se procese directo sobre la piel del HTML:

```text
mini-proyecto-2/
│
├── controllers/
│   └── MainController.php    # Cerebro del sistema (Switch de ruteo de problemas)
│
├── models/
│   ├── Utilidades.php        # Clase de validación estática y sanitización (OWASP)
│   └── Matematicas.php       # Clase estática para cálculos lógicos y estadísticos
│
├── views/
│   ├── components/
│   │   ├── header.php        # Componente de navegación compartido (DRY)
│   │   └── footer.php        # Pie de página externo dinámico con fecha de ejecución (DRY)
│   ├── menu.php              # Panel principal para la selección de problemas
│   └── problemas/            # Vistas individuales con formularios dinámicos
│       ├── problema1.php
│       ├── problema2.php
│       ├── problema3.php
│       ├── problema4.php
│       ├── problema5.php
│       ├── problema6.php
│       ├── problema7.php
│       ├── problema8.php
│       └── problema9.php
│
└── index.php                 # Punto de entrada único de la aplicación
