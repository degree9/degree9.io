(ns app.services
  (:require [feathers.app :as feathers :include-macros true]
            [meta.services :as services]
            [meta.services.hooks :as hooks]
))

(defn messages [app & [store]]
  (let [storef (get services/store store (:memory services/store))]
    (feathers/api app "messages" (storef) {:before {:find [(hooks/auth. (clj->js ["jwt" "local"]))], :get [(hooks/auth. (clj->js ["jwt" "local"]))]}})))
