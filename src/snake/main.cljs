(ns ^:figwheel-always snake.main
  (:require
    [snake.ainit]
    [snake.view :as view]
    [reagent.core :as reagent]))

(reagent/render-component
  [view/main]
  (. js/document (getElementById "app")))
