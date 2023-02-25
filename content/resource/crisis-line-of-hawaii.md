+++
rock-pile = ['body'] # ['body' | 'relationships' | 'mind' | 'spirit']
rock-pile_weight = 2
resource-types = ['phone','local']
resource-types_weight = 2
tags = ['suicide','hotline']
tags_weight = 2
title = 'Crisis Line of Hawaii'
description = "Hawai'i Cares. A free mental health and substance use call center with 24/7 local representatives"
logo = 'https://b342fd.p3cdn1.secureserver.net/wp-content/uploads/2020/07/dohcareslogo.jpg'
[[phone]] #This Value can be repeated
  description = 'Call from any island.'
  number = '+1-808-832-3100'
  [phone.text]
    sms = false
[[phone]] #This Value can be repeated
  description = 'Toll-Free.'
  number = '+1-800-753-6879'
  [phone.text]
    sms = false
[[website]]
  url = 'https://hicares.hawaii.gov/'
  description = 'We support adults and adolescents through crisis, treatment and recovery. Call from any island: 808-832-3100 | toll-free 800-753-6879'
# Add any supplemental content below the `+++' line
+++
