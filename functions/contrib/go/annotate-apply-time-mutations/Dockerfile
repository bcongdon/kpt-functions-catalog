FROM golang:1.16-alpine3.13
ENV CGO_ENABLED=0
WORKDIR /go/src/

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -o /usr/local/bin/function ./

#############################################

FROM alpine:3.13
COPY --from=0 /usr/local/bin/function /usr/local/bin/function
ENTRYPOINT ["function"]

