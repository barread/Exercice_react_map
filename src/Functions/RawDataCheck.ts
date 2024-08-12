const checkValidAddress = (address:string):Boolean => {
    const parsedAddress = address.split(',')
    if (parsedAddress.length===3) return true;
    else return false;
}

const RawDataCheck = (data:any) => {
    if (
        data.name && data.images && data.avg_rating &&
        data.nb_ratings && data.schedule_openings && data.address &&
        checkValidAddress(data.address) && data.longitude && data.latitude
    ) return true;
    else return false;
}

export default RawDataCheck