import { UserData } from '../hooks/types';

export default function dataHandler(data: string): UserData | undefined {
  const filteredData = {} as UserData;
  if (data.substr(0, 2) === '42') {
    const getParseableStr = data.substr(2);
    const { results } = JSON.parse(getParseableStr)[1];
    filteredData['gender'] = results[0].gender;
    filteredData['name'] = results[0].name;
    filteredData['coordinates'] = results[0].location.coordinates;
    filteredData['uuid'] = results[0].login.uuid;
    filteredData['dob'] = results[0].dob;
    filteredData['picture'] = results[0].picture;
    return filteredData;
  }
}
