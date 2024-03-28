
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.3d35aa69f761bd1f41ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/625.latest.en.974376883aaaea439fe7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/517.latest.en.ed8975b5f3703503a9cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/681.latest.en.11758ebf297b3d91af42.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.6faaf4e2cf22783d5790.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.latest.en.c93e6a6b8624ef406214.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.54d8b34024818cafec9f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/125.latest.en.efaf89d2a0b0b5dbc0ba.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.latest.en.313e243f59663328b7ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.3ceb148be2187f71e1e0.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/625.latest.en.92713c61e5ec653ca0bf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5e52d9ec000e6dcd2cd6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/836.latest.en.6e0fd6af0121f716b925.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.ae2e533b7628db5d1e35.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  