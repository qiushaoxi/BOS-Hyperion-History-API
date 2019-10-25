module.exports = {
    apps: [
        {
            name: "Indexer",
            script: "./launcher.js",
            node_args: ["--max-old-space-size=8192"],
            autorestart: false,
            kill_timeout: 3600,
            env: {
                AMQP_HOST: "127.0.0.1:5672",
                AMQP_API:  "127.0.0.1:15672",
                AMQP_USER: "ubuntu",
                AMQP_PASS: "ubuntu123456",
                REDIS_HOST: "127.0.0.1",
                REDIS_PORT: "6379",
                ES_HOST: "127.0.0.1:9200",
                ES_USER: "",
                ES_PASS: "",
                NODEOS_HTTP: "http://127.0.0.1:180",
                NODEOS_WS: "ws://127.0.0.1:8080",
                PARSER: "1.8",
                START_ON: 1,
                STOP_ON: 0,
                AUTO_STOP: 0,
                REWRITE: "false",
                PURGE_QUEUES: "false",
                BATCH_SIZE: 5000,
                QUEUE_THRESH: 8000,
                LIVE_READER: "true",
                LIVE_ONLY: "false",
                FETCH_BLOCK: "true",
                FETCH_TRACES: "true",
                CHAIN: "bos",
                CREATE_INDICES: "v1",
                PREVIEW: "false",
                DISABLE_READING: "false",
                READERS: 1,
                DESERIALIZERS: 1,
                DS_MULT: 6,
                ES_INDEXERS_PER_QUEUE: 1,
                ES_ACT_QUEUES: 1,
                READ_PREFETCH: 50,
                BLOCK_PREFETCH: 100,
                INDEX_PREFETCH: 500,
                ENABLE_INDEXING: "true",
                PROC_DELTAS: "true",
                INDEX_DELTAS: "true",
                INDEX_ALL_DELTAS: "false",
                ABI_CACHE_MODE: "false",
                ACCOUNT_STATE: "false",
                VOTERS_STATE: "false",
                USERRES_STATE: "false",
                DELBAND_STATE: "false",
                REPAIR_MODE: "false",
                DEBUG: "false",
                ENABLE_STREAMING: "true"
            }
        },
        {
            name: "API",
            script: "./api/api-loader.js",
            exec_mode: "cluster",
            merge_logs: true,
            instances: 4,
            autorestart: true,
            exp_backoff_restart_delay: 100,
            watch: ["api"],
            env: {
                NODEOS_HTTP: "http://127.0.0.1:180",
                AMQP_HOST: "127.0.0.1:5672",
                AMQP_API:  "127.0.0.1:15672",
                AMQP_USER: "ubuntu",
                AMQP_PASS: "ubuntu123456",
                REDIS_HOST: "127.0.0.1",
                REDIS_PORT: "6379",
                ES_HOST: "127.0.0.1:9200",
                ES_USER: "",
                ES_PASS: "",
                SERVER_PORT: "7000",
                SERVER_NAME: "api.boscore.io",
                SERVER_ADDR: "127.0.0.1",
                CHAIN: "bos",
                ENABLE_CACHING: "false",
                CACHE_LIFE: 30
            }
        }
    ]
};