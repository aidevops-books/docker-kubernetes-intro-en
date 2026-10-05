# Optional Nested Swarm Lab

Chapter 14 uses three Docker-in-Docker nodes named `manager1`, `worker1`, and `worker2`. The outer Docker engine remains outside the Swarm. This optional exercise requires privileged Linux containers and sufficient local resources; use a disposable learning machine where that is permitted.

Before starting, ensure those container names and port 8090 are unused. `lab-nodes.yaml` creates the nested engines and their registry. Follow Chapter 14 for initialization, worker tokens, image transfer, registry publication, and stack deployment. Do not run `docker swarm init` against the outer engine.

The stack's Web replicas use the API at `api:3000`. The published inner port 8080 is mapped through the manager container to workstation port 8090. Browser requests therefore use `http://127.0.0.1:8090`.

The example Redis service uses one manager-constrained instance and local named storage. It is not a highly available database. Scaling API tasks does not replicate Redis data.

Remove the `shop` stack inside `manager1`, then run `docker compose -f lab-nodes.yaml down -v` from this directory when finished. This discards the lab's nested engine volumes and registry state. Remove the exported `intro-images.tar` separately if it is no longer needed.
