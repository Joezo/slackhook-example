# Slackhook example

The purpose of this repo is to provide an example of how to use [slackhook](https://github.com/Joezo/node-slackhook) to integrate teamcity with Slack.

It is very basic but gives enough of a guide on how to set it up.

You can run this example on Heroku for free, which is what I would recommend.

## Setting up teamcity

You'll need to install the web hooks plugin for Teamcity, which you can find [here](http://netwolfuk.wordpress.com/teamcity-plugins/tcwebhooks/).

You then just need to configure the webhooks option for your build to post to your heroku app at `/hooks/teamcity`