task_id: post-reboot-readonly-ping
project_path: C:\Users\User\OneDrive\Документы\New project\drmelhem.ru
mode: execute
sandbox: workspace-write
approval: never

# Задача
Выполни безопасную read-only проверку после перезагрузки worker.

Работай только с проектом:
C:\Users\User\OneDrive\Документы\New project\drmelhem.ru

# Жёсткие правила
- ничего не менять
- не создавать новые файлы
- не удалять файлы
- не делать git commit в проекте
- не делать push в проекте
- не запускать deploy
- не устанавливать зависимости
- не править код
- только анализ и отчёт

# Что нужно сделать
1. Подтверди, что путь существует.
2. Подтверди, является ли папка git-репозиторием.
3. Найди файл source/production/index.html.
4. Определи текущий текст H1 в hero.
5. Определи текст primary CTA и его href.
6. Ничего не менять.

# Формат отчёта
1. Путь существует: да / нет
2. Это git-репозиторий: да / нет
3. source/production/index.html существует: да / нет
4. Текст H1
5. Текст primary CTA
6. href primary CTA
7. Было ли что-либо изменено: нет
