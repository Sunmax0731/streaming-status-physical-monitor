# 要件定義

- Repo: `streaming-status-physical-monitor`
- Domain: IoT
- Rank: 52 / P2 / Score 55
- Idea No: 14
- アイデア名: 配信状態物理モニター
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
OBS配信中、録画中、マイク、音量、BGM状態をM5Stackで表示・操作する。

## 課題
配信中の状態確認やミュート操作が画面上で埋もれる。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
