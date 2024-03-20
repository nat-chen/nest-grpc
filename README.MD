# Introduction 

## Summary

1. Begin by installing the `protoc` package. Then, convert the *.proto file to the required TypeScript file for NestJS using the following command:

```bash
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/user/user.proto
```

2. Modify the `assets` and `watchAssets` properties in the nest-cli.json file:
- `assets`: used to distribute non-TypeScript files.
- `watchAssets`: enables watching of all non-ts assets.

```json
"compilerOptions": {
  "deleteOutDir": true,
  "assets": ["**/*.proto"],
  "watchAssets": true
}
```

## Attention

- If you encounter an error like `1 CANCELLED: Call cancelled`, ensure that you have correctly configured the URL and port for both HTTP and microservices.
- The default listening port for gRPC is 5000.