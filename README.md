# Kalouk CLI

Command line interface for interacting with Kalouk tools and services.

## Installation

```bash
npm install
npm run build
```

## Development

```bash
npm run dev -- --help
```

## Usage

### Main Help

```bash
kalouk --help
# or
kalouk -h
```

### Query Interface (quin)

```bash
kalouk quin --help
# or
kalouk quin -h
```

Available quin commands:

- `search` - Search for data using Kalouk API
- `get` - Get specific data by ID
- `list` - List available resources

### Data Pipeline (pipe)

```bash
kalouk pipe --help
# or
kalouk pipe -h
```

Available pipe commands:

- `create` - Create a new data pipeline
- `start` - Start an existing pipeline
- `stop` - Stop a running pipeline
- `status` - Check pipeline status
- `list` - List all pipelines
- `delete` - Delete a pipeline

## Examples

```bash
# Query interface examples
kalouk quin search -q "temperature" -f table
kalouk quin get 12345 -f json
kalouk quin list -t sensors

# Data pipeline examples
kalouk pipe create my-pipeline -s mqtt://localhost -d postgres://db
kalouk pipe start my-pipeline --watch
kalouk pipe status -a
```

## Project Structure

```
src/
├── index.ts           # Main CLI entry point
├── commands/
│   ├── quin.ts        # Query interface commands
│   └── pipe.ts        # Data pipeline commands
└── utils/
    └── logger.ts      # Logging utilities
```

## Development Status

🚧 **This is a scaffold/template** - All commands currently show placeholder functionality with "fake" help information. The actual implementation logic is marked with TODO comments and needs to be developed.

## Contributing

1. Implement the TODO sections in the command files
2. Add proper error handling
3. Add configuration management
4. Add tests
5. Add more detailed documentation
