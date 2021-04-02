export function getAsanaUserUrl(name: string): string {
  if (!name) {
    return "";
  } else if (name === 'apgapg') {
    return 'https://app.asana.com/0/712057959076542/list';
  } else if (name === 'someshubham') {
    return 'https://app.asana.com/0/1127520825602495/list';
  } else if (name === 'samvitjain') {
    return 'https://app.asana.com/0/1190264423420113/list';
  } else if (name === 'Aashishm178') {
    return 'https://app.asana.com/0/1200109906013623/list';
  } else {
    return name;
  }
}

export function getAsanaUserId(name: string): string {
  const userUrl = getAsanaUserUrl(name);
  if (!userUrl) {
    return "";
  } else {
    return userUrl.replace('https://app.asana.com/0/', '').replace('/list', '');
  }
}