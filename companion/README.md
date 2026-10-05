# English Edition Companion

Exact application and manifest sources for *Docker & Kubernetes: A Practical Introduction - 2026 English Edition*, John Bae, AIDevOps Books.

Start in this directory unless a chapter explicitly changes directory. Use Linux containers and a dedicated local learning environment. These files contain teaching credentials and local HTTP, not a production security configuration.

## Application

- `api/`: Express API with `/health`, `/ready`, and `/api/count`; Node.js 24 base, committed npm lockfile, and a separate multi-stage non-root Dockerfile.
- `web/`: English Mini CloudShop page. Its relative `/api/count` request uses the same browser origin. Nginx proxies `/api/` to `API_UPSTREAM`, default `api:3000`.
- `compose.yaml`: Web on host port 8080, API on 3000, internal Redis on 6379, and the named Redis data volume.

```bash
docker compose up -d --build
docker compose ps
```

Open `http://127.0.0.1:8080`. Stop with `docker compose down`; add `-v` only when deliberately discarding the project's volume data. Use `curl.exe` in Windows PowerShell if curl is aliased.

## Kubernetes progression

Chapters 15-19 use the dedicated kind cluster `intro`, context `kind-intro`, default namespace, and the introductory `intro-api` Service on port 80. Apply files in chapter order; configuration and dependencies are introduced deliberately.

Chapter 20 uses namespace `cloudshop` and the `k8s/app/` files. Its API Service is named `api` and uses port 3000. Create Redis before the API, retain `REDIS_PORT: "6379"`, and remove the earlier hostless `intro-ingress` before creating the full application's route. Load both locally built images into the named kind cluster.

The Ingress files require a running Traefik controller. A plain kind cluster supplies neither that controller nor a public load balancer. Follow Chapter 19 to install a recorded chart version and use a local port-forward.

`k8s/broken/` contains deliberately failing examples for Appendix E. Apply one at a time and recover before continuing. Do not bulk-apply this directory or the entire `k8s` tree.

## Evidence and cleanup

Use `LEARNING_RECORD.md` to capture context, versions, image identity, observations, recovery, and limits. Never record real secrets. Read the chapter-specific data-loss note before deleting a volume, claim, namespace, or cluster.

The Compose, registry, Swarm, and Kubernetes labs were run end to end for this edition. The optional privileged Swarm lab has a separate README and is not required to complete the Kubernetes path.
