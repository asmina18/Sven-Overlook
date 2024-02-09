#!/bin/bash
# Инициализация проекта React
npm create vite@latest app -- --template react
cd app
npm install react-router-dom sass 
cd src
# Создание подпапок
mkdir components layout hooks pages
# Создание компонентов Nav, Header и Footer
for component in Nav Header Footer Title ; do
  mkdir components/$component
  touch components/$component/$component.jsx
  touch components/$component/${component}.module.scss
done

# Создание MainLayout в layout
mkdir layout/MainLayout
cd layout/MainLayout
touch MainLayout.jsx
touch mainLayout.module.scss
cd ../..

# Создание страниц
for page in   HomePage  LoginPage ErrorPage; do
  mkdir pages/$page
  cd pages/$page
  touch $page.jsx
  touch ${page,,}.module.scss
  cd ../..
done

# Удаление неиспользуемых стилей и адаптация App.jsx
sed -i "4d" src/main.jsx
sed -i "4d" src/App.jsx
rm -rf src/App.css src/index.css

echo "Новый проект React инициализирован - Удачи в работе!"
