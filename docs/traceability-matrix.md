# Traceability Matrix

- Repo: `streaming-status-physical-monitor`
- Domain: IoT
- Rank: 52 / P2 / Score 55
- Idea No: 14
- アイデア名: 配信状態物理モニター
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

| 要件 | 仕様 | 実装 | テスト | docs/release |
| --- | --- | --- | --- | --- |
| 代表フロー | 利用者フロー | src/core, app | happy-path | README, user-guide |
| 必須不足検出 | データ仕様 | src/validators | missing-required | test-plan |
| 警告保持 | 安全境界 | src/report | warning, mixed-batch | security-privacy |
| closed alpha配布 | release checklist | scripts/validate | npm test | release-evidence |
| QCDS A-以上 | evaluation criteria | src/review-model | metrics validation | qcds docs |
