# Docker & Kubernetes: A Practical Introduction — 2026 English Edition — Companion Files

Official companion files for *Docker & Kubernetes: A Practical Introduction — 2026 English Edition* by John Bae (AIDevOps Cloud Native Series #03).
Every file the book refers to as `companion/...` is in this repository's `companion/` folder at the same path.

- Book page: <https://www.aidevops.us/books/docker-kubernetes-practical-introduction/>
- The same files as a ZIP: <https://www.aidevops.us/downloads/books/docker-kubernetes-practical-introduction/companion.zip>

## Getting the files

```bash
git clone https://github.com/aidevops-books/docker-kubernetes-intro-en.git
cd docker-kubernetes-intro-en/companion
```

If you do not use Git, download and extract the ZIP above instead.

## Layout

```text
companion/
├── api/
├── k8s/
├── swarm/
├── web/
├── compose.yaml
├── LEARNING_RECORD.md
└── README.md
```

The lab order, prerequisites and what each file is for are in [`companion/README.md`](companion/README.md). Start there.

## Notes

- Use these files in a learning environment only. Passwords and tokens in the examples are teaching values, not for real services.
- With tool versions other than the book's, output and options may differ slightly.
- To report an error, open an Issue with the book title and edition, chapter, your environment and the steps to reproduce.

## License

Copyright © 2026 John Bae

- **Code** (manifests, Dockerfiles, scripts, configuration and example application source): [MIT License](LICENSE). Use and modify it freely, keeping the copyright notice.
- **Written guides** (every Markdown document, including this README): [CC BY-NC-ND 4.0](LICENSE-docs). Share them unchanged, with credit, for non-commercial purposes. Commands and code fragments quoted in the guides may be used under MIT, like the rest of the code.
- **The book's text and figures** are not in this repository. All rights reserved.

Software from other projects that the examples use, such as container images and Helm charts, remains under those projects' own licenses.
