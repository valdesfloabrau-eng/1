task_id: bridge-start-healthcheck-fix
project_path: C:\Users\User\codex_github_bridge
mode: execute
sandbox: workspace-write
approval: never

# Задача
Убери ложный failed-start у START_BRIDGE, когда worker становится healthy чуть позже текущего лимита ожидания.

Работай только с проектом:
C:\Users\User\codex_github_bridge

# Контекст
Сейчас bridge реально поднимает worker, но иногда START_BRIDGE сообщает:
- Worker failed to start correctly (status: starting)
хотя сам worker через несколько секунд уже выходит в нормальный idle/running.

То есть нужно чинить не worker loop, а критерий/тайминг healthcheck в bridge startup.

# Цель
Сделать запуск bridge честным и устойчивым:
- не давать ложный failed-start, если worker реально выходит в healthy state чуть позже
- не превращать старт в бесконечное ожидание
- не ломать уже рабочую схему START_BRIDGE / STOP_BRIDGE

# Что нужно сделать
1. Найди логику startup healthcheck в bridge startup файлах.
2. Исправь её так, чтобы:
   - bridge ждал healthy-state чуть надёжнее
   - healthy-state определялся по реальным признакам живого worker, а не только по слишком раннему снимку status=starting
   - ложный fail не появлялся, если worker за разумное время доходит до idle/running
   - при настоящем сбое bridge по-прежнему честно завершался ошибкой

3. Разумные ограничения:
   - не делать бесконечный wait
   - не делать хрупкие sleeps без проверки состояния
   - не запускать второй worker
   - не трогать Codex app
   - не менять transport architecture
   - не трогать drmelhem.ru и другие проекты

4. Если для правки нужен backup изменяемых файлов — создай его.

5. После правки выполни тесты:
   - Сценарий 1: worker остановлен -> START_BRIDGE -> worker поднимается -> bridge сообщает успех, если worker реально вышел в healthy state
   - Сценарий 2: повторный START_BRIDGE при уже живом worker -> второй worker не создаётся
   - Сценарий 3: STOP_BRIDGE по-прежнему работает корректно

# Критерии приёмки
- ложный failed-start устранён
- worker не дублируется
- bridge всё ещё честно падает при реальной ошибке
- ничего не меняется вне C:\Users\User\codex_github_bridge

# Формат отчёта
1. Какие файлы были изменены
2. Какие backup-файлы были созданы
3. В чём была причина ложного failed-start
4. Что именно изменено в healthcheck логике
5. Устранился ли ложный failed-start: да / нет
6. Создаётся ли второй worker при повторном старте: да / нет
7. Работает ли STOP_BRIDGE после правки: да / нет
8. Были ли ошибки или предупреждения
9. Было ли что-то изменено вне C:\Users\User\codex_github_bridge: да / нет
